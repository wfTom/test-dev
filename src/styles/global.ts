import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white:#fff;
    --black:#181c1f;
    --title-side-bar:#3e4346;
    --letter:#7e8285;
    --minutes:#1b1f22;
    --gray:#282c2f;
    --gray2:#222629;
    --gray3:#282c2f;
    --light-blue:#edf1f2;
    --blue:#31a7e5;
    --blue2:#30a6e3;
    --gray-50:#F9FAFB;
    --gray-200:#E5E7EB;
    --gray-300:#D1D5DB;
    --gray-500:#6B7280;
    --gray-700:#374151;
    --gray-900:#111827;
    --green-50:#ECFDF5;
    --green-400:#34D399;
    --green-500:#10B981;
    --green-800:#065F46;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--white);
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    cursor:pointer;
  }

  a {
    color:inherit;
    text-decoration:none;
  }

  @media(max-width: 1080px){
    html{
      font-size:93.75%;
    }
  }

  @media(max-width: 720px){
    html{
      font-size:87.5%;
    }
  }
`
