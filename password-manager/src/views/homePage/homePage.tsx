
import SiteContainer from '../../components/siteContainer/siteContainer'
import './homePage.css'


const HomePage = () => {
  return (
    <div className='homePageContainer'>
      <div className='homePageContent'>
        <div className='leftTab'>
          <div className='burgirTabDiv'>
            <div className='orangeTab'></div>
            <img src={require("../../assets/image/burger_menu.png")} alt='burgir' className='burgirIcon' />
            <div className='orangeOval'><img src={require("../../assets/image/Oval.png")} alt="" /></div>
          </div>
          <div className='homeTabDiv'>
            <div className='orangeTab'></div>
            <img src={require("../../assets/image/home_icn.png")} alt='home' className='homeIcon' />
            <div className='orangeOval'><img src={require("../../assets/image/Oval.png")} alt="" /></div>
          </div>
        </div>
        <div className='content'>
          <div className='headerContent'>
            <div className='logo'>
              <img src={require("../../assets/image/pass_logo.png")} alt="password master" className='logoImage' />
            </div>
            <div className='tabOptions'>
              <img src={require("../../assets/image/sync.png")} alt="sync" className='iconTab' />
              <img src={require("../../assets/image/profile.png")} alt="profile" className='iconTab' />

            </div>

          </div>
          <div className='mainContent'>
            <div className='titleAndSearch'>
              <div className='titleLeftSide'>
                <div className='sitesHeading'>
                  <p className='sitesP'>Sites</p>
                  <div className='orangeUnderline'></div>
                </div>
                <div className='subHead'>
                  <div className='subHeadTitle'>Social Media</div>
                  <div className='counter'>07</div>
                  <div className='dropdown'><img src={require("../../assets/image/Path Copy.png")} alt="dropdown" className='dropdownIcon' /></div>
                </div>
              </div>
              <div className='titleRightSide'>
                <div className='searchBar'>
                  <input type="text" placeholder='Search' className='searchBarInput' />
                  <img src={require("../../assets/image/search.png")} alt="searchIcon" className='searchIcon' />
                </div>
                <img src={require("../../assets/image/add_btn.png")} alt="addIcon" className='addIcon' />
              </div>
            </div>
            <div className='vaultWindow'>
              {/* <div className='addSite'>
                <p>Please Click on the “+” symbol
                  to add sites</p>
              </div> */}
              <div className='sitesGrid gridFlex'>
                <SiteContainer appIcon="facebook" />
                <SiteContainer />
                <SiteContainer />
                <SiteContainer />
                <SiteContainer />
                <SiteContainer />
                <SiteContainer />
                <SiteContainer />
                <SiteContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

