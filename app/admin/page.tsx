const stats = [
  ['RSVP responses', '24'],
  ['Groups attending', '18'],
  ['Guests attending', '52'],
  ['Adults', '41'],
  ['Children', '11'],
  ['Vegetarian meals', '6'],
  ['Vegan meals', '3'],
  ['Allergies', '4'],
  ['Staying locally', '15'],
]

const mockRows = [
  ['Smith Family', 'Yes', '4', '2 children', 'Vegetarian x1', 'Yes'],
  ['Brown Family', 'No', '0', '-', '-', 'No'],
  ['Jones Party', 'Yes', '3', '-', 'Allergy x1', 'Not Sure Yet'],
]

export default function AdminPage() {
  return (
    <main className="pageWrap">
      <p className="smallLabel">Admin Preview</p>
      <h1>RSVP Dashboard</h1>

      <div className="statsGrid">
        {stats.map(([label, value]) => (
          <div className="statCard" key={label}>
            <span>{value}</span>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <div className="adminTableWrap">
        <div className="adminToolbar">
          <input placeholder="Search guest records..." />
          <button>Export CSV</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Status</th>
              <th>Guests</th>
              <th>Children</th>
              <th>Dietary</th>
              <th>Accommodation</th>
            </tr>
          </thead>
          <tbody>
            {mockRows.map((row) => (
              <tr key={row[0]}>
                {row.map((item) => (
                  <td key={item}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}