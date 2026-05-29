import RSVPWizard from '@/components/RSVPWizard'

export default function RSVPPage() {
  return (
    <main className="pageWrap">
      <p className="smallLabel">Private RSVP</p>
      <h1>Kindly Respond</h1>
      <p className="pageText">
        Please complete the private RSVP sequence below. This is the visual Phase 1 flow.
      </p>

      <RSVPWizard />
    </main>
  )
}