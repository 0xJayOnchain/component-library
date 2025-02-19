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
        <a href="https://www.chromatic.com/library?appId=67b0c5e84ffe34d0faacbdb6" target="_blank">View Components</a>
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