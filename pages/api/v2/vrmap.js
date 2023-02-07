const { GoogleSpreadsheet } = require('google-spreadsheet')

export default async function handler(req, response) {
  const creds = JSON.parse(Buffer.from(process.env.CREDS, "base64").toString());
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
  await doc.useServiceAccountAuth(creds)
  await doc.loadInfo();
  
  const sheet = doc.sheetsByTitle['New']
  const rows = await sheet.getRows()

  const nodes = {};
  const links = [];

  rows.forEach((row) => {
    const { id, name, parent, url } = row;
    nodes[id] = { id, name, parent, url, level: 0 };
  });

  Object.values(nodes).forEach((node) => {
    if (node.parent && nodes[node.parent]) {
      links.push({
        source: node.id,
        target: node.parent,
        level: nodes[node.parent]?.level + 1,
      });
      node.level = nodes[node.parent].level + 1;
    }
  });

  response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  return response.status(200).json({ nodes: Object.values(nodes), links })
}
