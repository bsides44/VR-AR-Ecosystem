import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function addItem(req, res) {
  const { name, parent, url } = req.body;

  const creds = JSON.parse(Buffer.from(process.env.CREDS, "base64").toString());
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
  await doc.useServiceAccountAuth(creds)
  await doc.loadInfo();

  // Add data to the first sheet
  const sheet = doc.sheetsByTitle['New']
  const rows = await sheet.getRows();
  const id = rows.length + 1;
  const parentExists = rows.some(row => row.id === parent);

  if (!parentExists) {
    res.status(400).json({ error: "Parent ID does not exist in the sheet" });
    return;
  }

  await sheet.addRow({ id, name, url, parent });
  res.status(200).json({ success: true });
  // res.revalidate('/api/v2/vrmap');
};
