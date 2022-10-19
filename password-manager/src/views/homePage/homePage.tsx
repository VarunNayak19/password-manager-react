
import SiteContainer from '../../components/siteContainer/siteContainer'
import './homePage.css'
// import Modal from '../../components/modals/modal1/modal1'
import { useState } from 'react'

const HomePage = () => {
  const [modal, setModal] = useState(false)
  const [users, setUsers] = useState({
    url: "", siteName: "", sector: "", userName: "", sitepass: "", notes: ""
  })
  const toggleModal = () => {
    setModal(!modal)
  }
  const [orangeTab1, setorangeTab1] = useState(false)
  const [orangeTab2, setorangeTab2] = useState(true)
  const showTab1 = () => {
    setorangeTab1(true);
    setorangeTab2(false);
  }

  const showTab2 = () => {
    setorangeTab2(true);
    setorangeTab1(false);
  }

  const [modal1, setmodal1] = useState(true)
  const [modal2, setmodal2] = useState(false)


  const openModal2 = () => {
    setmodal1(false);
    setmodal2(true);
  }

  console.log(orangeTab1)
  const data = [
    {
      siteName: 'Linkedin',
      url: 'www.linkdin.com',
      sector: 'Social Media',
      userName: 'ssmraok',
      sitePassword: 'abcd123',
      notes: '',
      icon: '/password-manager/public/appIcons/linkedinIcon.png'
    },
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



  const getFormData = (e: any) => {
    e.preventDefault();
    localStorage.setItem("formdata", JSON.stringify(users))

  }
  let name: any, value: any;
  const handleInput = (r: any) => {
    name = r.target.name;
    value = r.target.value;
    setUsers({ ...users, [name]: value })
  }
  const resetForm = () => {
    setUsers({ ...users, url: "", siteName: "", sector: "", userName: "", sitepass: "", notes: "" })
  }

  return (
    <div className='homePageContainer'>
      <div className='homePageContent'>
        <div className='leftTab'>
          <div className='burgirTabDiv'>
            {
              orangeTab1 &&
              <div className='orangeTab tab1' id='orangeTabId'></div>
            }
            <img src={require("../../assets/image/burger_menu.png")} alt='burgir' className='burgirIcon' onClick={showTab1} />
            {
              orangeTab1 &&
              <div className='orangeOval '><img src={require("../../assets/image/Oval.png")} alt="" className='tab1' /></div>
            }
          </div>
          <div className='homeTabDiv'>
            {orangeTab2 && <div className='orangeTab tab2'></div>}

            <img src={require("../../assets/image/home_icn.png")} alt='home' className='homeIcon' onClick={showTab2} />
            {orangeTab2 && <div className='orangeOval'><img src={require("../../assets/image/Oval.png")} alt="" /></div>}

          </div>
        </div>
        <div className='content'>
          <div className='headerContent'>
            <div className='logo'>
              <img src={require("../../assets/image/pass_logo.png")} alt="password master" className='logoImage' />
            </div>
            <div className='tabOptions'>
              <img src={require("../../assets/image/sync.png")} alt="sync" className='iconTab' />
              <img src={require("../../assets/image/profilepc.png")} alt="profile" className='iconTab' />

            </div>

          </div>
          <div className='mobileHeaderBlue'>
            <img src={require("../../assets/image/burger_menu.png")} alt='burgir' className='burgirIconMobile' onClick={showTab1} />
            <div className='mobileHeaderLogos'>
              <img src={require("../../assets/image/PASS MANAGER.png")} alt="pass" className='logoIconPass' />
              <img src={require("../../assets/image/search.png")} alt="search" className='logoIconSearch' />
              <img src={require("../../assets/image/sync_icn.png")} alt="sync" className='logoIconSync' />
              <img src={require("../../assets/image/profile.png")} alt="profile" className='logoIconProfile' />
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
                <img src={require("../../assets/image/add_btn.png")} alt="addIcon" className='addIcon' onClick={toggleModal} />
              </div>
            </div>
            <div className='vaultWindow'>
              {
                data.length === 0 ?
                  <div className='addSite'>
                    <p>Please Click on the “+” symbol
                      to add sites</p>
                  </div>
                  :
                  <div className='sitesGrid gridFlex'>
                    <img src={require("../../assets/image/add_btn.png")} className="addIconMobile" alt='addIcon' onClick={toggleModal} />
                    <SiteContainer  appIcon="facebook" appName="FaceBook"/>
                    <SiteContainer  appIcon="youtube" appName="YouTube"/>
                    <SiteContainer  appIcon="linkedin" appName="LinkedIn"/>
                    <SiteContainer  appIcon="pinterest" appName="Pinterest"/>
                    
                  </div>
                  
              }



              {
                modal &&
                <div className='overlayModal' >
                  <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modalContent">
                      {
                        modal1 &&

                        <form className='modal1' onSubmit={getFormData}>
                          <div className='siteNameModalHead'>Add Site</div>
                          <div className='line1 flexColuming'>
                            <label>URL</label>
                            <input type="text" name="url" id="" className='urlInput modalInputBox' value={users.url} onChange={handleInput} />
                          </div>
                          <div className='line2 rowFlexing'>
                            <div className='leftInput flexColuming'>
                              <label>Site Name</label>
                              <input type="text" name="siteName" id="" value={users.siteName} onChange={handleInput} className='urlInput modalInputBox' />
                            </div>
                            <div className='rightInput flexColuming'>
                              <label>Sector/Folder</label>
                              <input type="text" name="sector" id="" value={users.sector} onChange={handleInput} className='sectorInput modalInputBox' />
                            </div>

                          </div>
                          <div className='line3 rowFlexing'>
                            <div className='leftInput flexColuming'>
                              <label>User Name</label>
                              <input type="text" name="userName" id="" value={users.userName} onChange={handleInput} className='usernameInput modalInputBox' />
                            </div>
                            <div className='rightInput flexColuming'>
                              <label>Site Password</label>
                              <input type="text" name="sitepass" id="" value={users.sitepass} onChange={handleInput} className='passwordInput modalInputBox' />
                            </div>
                          </div>
                          <div className='line4 flexColuming'>
                            <label>Notes</label>
                            <textarea name="notes" id="" value={users.notes} onChange={handleInput} className='textAreaInput modalInputBox'></textarea>
                          </div>
                          <div className='buttonsLine5'>
                            <button className='resetButton' onClick={resetForm}>Reset</button>
                            <button type='submit' className='saveButton'>Save</button>
                          </div>
                          <button className="close-modal" onClick={toggleModal}>
                            <img src={require("../../assets/image/close_btn.png")} alt="" />
                          </button>
                        </form>
                      }

                      {/* modal2 */}
                      {
                        modal2 &&

                        <form className='modal1' onSubmit={getFormData}>
                          <div className='siteNameModalHead'>Add Site</div>
                          <div className='line1 flexColuming'>
                            <label>URL</label>
                            <input type="text" name="url" id="" className='urlInput modalInputBox' value={users.url} onChange={handleInput} />
                          </div>
                          <div className='line2 rowFlexing'>
                            <div className='leftInput flexColuming'>
                              <label>Site Name</label>
                              <input type="text" name="siteName" id="" value={users.siteName} onChange={handleInput} className='urlInput modalInputBox' />
                            </div>
                            <div className='rightInput flexColuming'>
                              <label>Sector/Folder</label>
                              <input type="text" name="sector" id="" value={users.sector} onChange={handleInput} className='sectorInput modalInputBox' />
                            </div>

                          </div>
                          <div className='line3 rowFlexing'>
                            <div className='leftInput flexColuming'>
                              <label>User Name</label>
                              <input type="text" name="userName" id="" value={users.userName} onChange={handleInput} className='usernameInput modalInputBox' />
                            </div>
                            <div className='rightInput flexColuming'>
                              <label>Site Password</label>
                              <input type="text" name="sitepass" id="" value={users.sitepass} onChange={handleInput} className='passwordInput modalInputBox' />
                            </div>
                          </div>
                          <div className='line4 flexColuming'>
                            <label>Notes</label>
                            <textarea name="notes" id="" value={users.notes} onChange={handleInput} className='textAreaInput modalInputBox'></textarea>
                          </div>
                          <div className='buttonsLine5'>
                            <button className='resetButton'>Reset</button>
                            <button type='submit' className='saveButton'>Save</button>
                          </div>
                          <button className="close-modal" onClick={toggleModal}>
                            <img src={require("../../assets/image/close_btn.png")} alt="" />
                          </button>
                        </form>
                      }
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

