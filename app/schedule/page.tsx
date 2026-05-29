const schedule = [
  { time: '14:00', title: 'Guest Arrival', detail: 'Welcome drinks and soft music.' },
  { time: '15:00', title: 'Ceremony', detail: 'The wedding ceremony begins.' },
  { time: '17:00', title: 'Cocktail Hour', detail: 'Canapés, photos and celebration.' },
  { time: '19:00', title: 'Dinner', detail: 'Reception dinner and speeches.' },
  { time: '21:00', title: 'Dancing', detail: 'Music, dancing and late evening celebration.' },
]

export default function SchedulePage() {
  return (
    <main className="pageWrap">
      <p className="smallLabel">The Day</p>
      <h1>Wedding Schedule</h1>

      <div className="scheduleList">
        {schedule.map((item) => (
          <div className="scheduleCard" key={item.time}>
            <span>{item.time}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}