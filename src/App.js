import "./App.css";

function App() {
  return (
    <>
      {/* Navigation bar */}
      <nav className='navbar'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            <img
              src='https://web-assets.cred.club/_next/assets/images/home-page/cred-logo.png'
              alt='CRED'
              className='img img-fluid'
              width='49'
              height='66'
            />
          </a>

          <div className='nav-container'>
            <h5 className='nav-item'>blog</h5>
            <h5 className='nav-item'>we're hiring</h5>
            <div className='nav-item'>
              <h5 className='nav-item-button'>Download CRED</h5>
            </div>
          </div>
        </div>
      </nav>

      {/* Main header */}
      <div className='main-header'>
        <div className='headings'>
          rewards for paying
          <br />
          credit card bills.
        </div>
        <div style={{ marginTop: "35px" }}>
          <h4>join 5.9M+ members and win rewards worth ₹5 crores daily.</h4>
        </div>
        <div
          style={{
            marginTop: "58px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 className='main-button-label'>Download CRED</h4>
        </div>
      </div>
    </>
  );
}

export default App;
