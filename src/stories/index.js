import React from 'react';
import '../App.css'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import BRAND ASSET components here
import FullLogo from '../Components/Reusable/Brand-Assets/FullLogo';
import IntroCardGraphic from '../Components/Reusable/Brand-Assets/IntroCardGraphic'
import IconGraphic from '../Components/Reusable/Brand-Assets/IconGraphic'

// import CARD components here
import StylistCard from '../Components/Reusable/StylistCard';
import ProfileBuildCard from '../Components/Reusable/Cards/ProfileBuildCard'

//import NAVIGATION components here
import NavBar from '../Components/Reusable/Navigation/NavBar';

//import BUTTON components here
import FullButton from '../Components/Reusable/Buttons/FullButton';
import HeartButton from '../Components/Reusable/Buttons/HeartButton';
import XButton from '../Components/Reusable/Buttons/XButton';
import PreviousButton from '../Components/Reusable/Buttons/PreviousButton';
import NextButton from '../Components/Reusable/Buttons/NextButton';
import InfoButton from '../Components/Reusable/Buttons/InfoButton';

//import EMOJI components here
import OneCandle from '../Components/Reusable/Emoji-Icons/Age/OneCandle'
import TwoCandles from '../Components/Reusable/Emoji-Icons/Age/TwoCandles'
import ThreeCandles from '../Components/Reusable/Emoji-Icons/Age/ThreeCandles'
import FourCandles from '../Components/Reusable/Emoji-Icons/Age/FourCandles'
import FiveCandles from '../Components/Reusable/Emoji-Icons/Age/FiveCandles'
import SixCandles from '../Components/Reusable/Emoji-Icons/Age/SixCandles'

import ClientEmoji from '../Components/Reusable/Emoji-Icons/User-Types/ClientEmoji'
import StylistEmoji from '../Components/Reusable/Emoji-Icons/User-Types/StylistEmoji'

import MaleEmoji from '../Components/Reusable/Emoji-Icons/Gender/MaleEmoji'
import FemaleEmoji from '../Components/Reusable/Emoji-Icons/Gender/FemaleEmoji'
import LGBTQEmoji from '../Components/Reusable/Emoji-Icons/Gender/LGBTQEmoji'

import MoneyOne from '../Components/Reusable/Emoji-Icons/Money/MoneyOne'
import MoneyTwo from '../Components/Reusable/Emoji-Icons/Money/MoneyTwo'
import MoneyThree from '../Components/Reusable/Emoji-Icons/Money/MoneyThree'
import MoneyFour from '../Components/Reusable/Emoji-Icons/Money/MoneyFour'
import MoneyFive from '../Components/Reusable/Emoji-Icons/Money/MoneyFive'
import MoneySix from '../Components/Reusable/Emoji-Icons/Money/MoneySix'


// import FORM components here
import SignUpForm from '../Components/Reusable/SignInForm';

storiesOf('Brand Assets', module)
  .add('Full Logo', () => <FullLogo />)
  .add('Intro Card Graphic', () => <IntroCardGraphic />)
  .add('Icon', () => <IconGraphic />)

storiesOf('Cards', module)
  .add('Stylist Card', () => <StylistCard StylistName = 'Teresa Young' StylistLocation = 'Scottsdale, AZ' StylistReligion = 'Christian' StylistExperience = '11+' StylistSpecialty = 'Extensions, Chemical Perms, Ethnic Hair' />)
  .add('Profile Building', () => <ProfileBuildCard />)

storiesOf('Navigation', module)
  .add('Top Navbar', () => <NavBar />)

storiesOf('Buttons', module)
  .add('Login', () => <FullButton ButtonText = 'Log In' />)
  .add('Sign Up', () => <FullButton ButtonText= 'Sign Up' />)
  .add('Next', () => <FullButton ButtonText = 'Next' />)
  .add('Resend SMS', () => <FullButton ButtonText = 'Resend SMS' />)
  .add('User Type', () => <FullButton ButtonText = 'User Type:' />)
  .add('Gender', () => <FullButton ButtonText = 'Gender: ' />)
  .add('Match With', () => <FullButton ButtonText = 'Match with:' />)
  .add('Age', () => <FullButton ButtonText = 'Age:' />)
  .add('Age Range Desired', () => <FullButton ButtonText = 'Age Range Desired:' />)
  .add('Experience Desired', () => <FullButton ButtonText = 'Experience Desired:' />)
  .add('Zip Code', () => <FullButton ButtonText = 'Zip Code:' />)
  .add('Search Radius', () => <FullButton ButtonText = 'Search Radius:' />)
  .add('Willing to Spend', () => <FullButton ButtonText = 'Willing to Spend:' />)
  .add('Contact Preference', () => <FullButton ButtonText = 'Contact Preference:' />)
  .add('Religion', () => <FullButton ButtonText = 'Religion:' />)
  .add('Match With Religions', () => <FullButton ButtonText = 'Match with Religions:' />)
  .add('Ethnicity', () => <FullButton ButtonText = 'Ethnicity:' />)
  .add('Services Desired', () => <FullButton ButtonText = 'Services Desired:' />)
  .add('Double Booking OK', () => <FullButton ButtonText = 'Double Booking OK:' />)
  .add('Salon Types', () => <FullButton ButtonText = 'Salon Types:' />)
  .add('Heart Button', () => <HeartButton />)
  .add('X Button', () => <XButton />)
  .add('Previous Button', () => <PreviousButton />)
  .add('Next Button', () => <NextButton />)
  .add('Info Button', () => <InfoButton />)


storiesOf('Emojis/Age', module)
  .add('Teens', () => <OneCandle />)
  .add('20s', () => <TwoCandles />)
  .add('30s', () => <ThreeCandles />)
  .add('40s', () => <FourCandles />)
  .add('50s', () => <FiveCandles />)
  .add('60s and Older', () => <SixCandles />)

storiesOf('Emojis/Gender', module)
  .add('Male', () => <MaleEmoji />)
  .add('Female', () => <FemaleEmoji />)
  .add('LGBTQ+', () => <LGBTQEmoji />)

storiesOf('Emojis/User-Type', module)
  .add('Client', () => <ClientEmoji />)
  .add('Stylist', () => <StylistEmoji />)

storiesOf('Emojis/Money', module)
  .add('0-50', () => <MoneyOne />)
  .add('50-100', () => <MoneyTwo />)
  .add('100-250', () => <MoneyThree />)
  .add('250-500', () => <MoneyFour />)
  .add('500-1000', () => <MoneyFive />)
  .add('1000+', () => <MoneySix />)



storiesOf('Login', module)
  .add('Login Boxes', () => <SignUpForm />);
