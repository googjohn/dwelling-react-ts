export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-(--bg) gap-5 p-(--pad-margin-n)">
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWFpcjA5dTRuaHFibWJocWowMjNydGhwaW9pcWp2N3luNWsxYWZjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rm1p7xp3Odl2o/giphy.gif" alt="building gif" />
      <p className="text-accent text-center">
        Ooops! Something went wrong. <br />
        Either the page is missing or under development.
      </p>
    </div>
  )
}