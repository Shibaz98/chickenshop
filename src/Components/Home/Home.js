import pfc from '../../images/pfc.jpeg';

export default function Home() {
  return (
    <div className="home-page">
        <h1>Welcome to Chicken-Shop !</h1>
        <p>We operate 100+ chicken shops across the UK, order online and get your classics delivered to you within 30 minutes.</p>
        <img src={pfc} alt="image of burgers" />
    </div>
  )
}
