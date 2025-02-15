import './App.css'
import XIcon from './assets/xIcon'
import GithubIcon from './assets/githubIcon'

function App() {
  const navigateToSocial = (social) => {
    const socialMapping = {
      X: 'https://x.com/0xJayOnchain',
      github: 'https://github.com/0xJayOnchain/component-library',
    }
    window.open(socialMapping[social], '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <div className='home-page'>
        <h1>Component Library Collection</h1>
        <p>This is a component library with animations built using pure CSS</p>
        <div className='storybook-link'>
        <a href="Chromatic Link Here" target="_blank">View Storybook(Coming Soon)</a>
        </div>
        <div className='social-icons'>
          <XIcon
          navigationFunction={navigateToSocial}/>
          <GithubIcon 
          navigationFunction={navigateToSocial}/>
        </div>
        {/* <ButtonList /> */}
      </div>
    </>
  )
}

export default App