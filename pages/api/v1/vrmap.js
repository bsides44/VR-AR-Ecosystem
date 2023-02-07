const { GoogleSpreadsheet } = require('google-spreadsheet')

export default async function handler(req, response) {
  const creds = JSON.parse(Buffer.from(process.env.CREDS, "base64").toString());
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
  await doc.useServiceAccountAuth(creds)
  await doc.loadInfo();
  const nodes_sheet = doc.sheetsByTitle['nodes']
  const links_sheet = doc.sheetsByTitle['links']
  const node_rows = await nodes_sheet.getRows()
  const link_rows = await links_sheet.getRows()

  const nodes = node_rows.map((row) => {
    return {
      id: row.id,
      name: row.name,
      val: parseInt(row.val),
      level: parseInt(row.level),
      url: row.url,
      parent: row.parent || null,
    }
  })

  const links = link_rows.map((row) => {
    return {
      source: row.source,
      target: row.target,
      level: parseInt(row.level),
    }
  })

  response.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  response.setHeader('Access-Control-Allow-Credentials', true)
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  return response.status(200).json({ nodes, links })
}
