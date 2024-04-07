import './App.css';

function App() {
  return (
    <div className="App">
      <div class="content">
        <img src='resources/update.png'></img>
        <h1>Site Under Maintenance</h1>
        <p>We are currently updating our website. We apologize for any inconvenience this may cause. Please check back later.</p>

        <img src='resources/logo.png' className='logo'></img>
        <div class="contact-info">
          <a href="tel:+12897100100"><i className='fa fa-phone'></i>+1(289)7100-100</a>
          <a href="mailto:Toronto@100exchange.ca"><i className='fa fa-envelope'></i> Toronto@100exchange.ca</a>
          <a href='https://maps.app.goo.gl/SvEFn5vAg7BpiiEZ7'> <i className="fa fa-map-marker"></i> 6125 Yonge St, North York, M2M 3W8</a>
        </div>
      </div>

    </div>
  );
}

export default App;
