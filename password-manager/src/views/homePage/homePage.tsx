
import SiteContainer from '../../components/siteContainer/siteContainer'
import './homePage.css'
import { useState } from 'react'

const HomePage = () => {
  const [modal, setModal] = useState(false)
const toggleModal =()=>{
  setModal(!modal)
}

const data = [
  {
      siteName: 'Facebook',
      url: 'www.facebook.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcdXYZ',
      notes: '',
      icon: '/password-manager/public/appIcons/facebookIcon.png',
  },
  {
      siteName: 'YouTube',
      url: 'www.youtube.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: '/password-manager/public/appIcons/youtubeIcon.png',
  },
  {
      siteName: 'Linkedin',
      url: 'www.linkdin.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: '/password-manager/public/appIcons/linkedinIcon.png'
  }
]

if (localStorage.getItem('user Data') === null || 'undefined') {
  localStorage.setItem('user Data', JSON.stringify(data))
}

const previousData = JSON.parse(localStorage.getItem('user Data') || '[]')

console.log(previousData)

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
                <img src={require("../../assets/image/add_btn.png")} alt="addIcon" className='addIcon' onClick={toggleModal}/>
              </div>
            </div>
            <div className='vaultWindow'>
              {/* <div className='addSite'>
                <p>Please Click on the “+” symbol
                  to add sites</p>
              </div> */}
              <div className='sitesGrid gridFlex'>
                <SiteContainer appIcon="facebook" />
                <SiteContainer appIcon="youtube" />
                <SiteContainer appIcon="pinterest" />
                <SiteContainer appIcon="gmail" />
                <SiteContainer appIcon="linkedin" />
                <SiteContainer />
                <SiteContainer />
                <SiteContainer />
                <SiteContainer />
              </div>
              
              {
                modal &&
                <div className='overlaymodal'>
                  <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                      <h2>Hello Modal</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                        perferendis suscipit officia recusandae, eveniet quaerat assumenda
                        id fugit, dignissimos maxime non natus placeat illo iusto!
                        Sapiente dolorum id maiores dolores? Illum pariatur possimus
                        quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                        placeat tempora vitae enim incidunt porro fuga ea.
                      </p>
                      <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                      </button>
                    </div>
                  </div>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

