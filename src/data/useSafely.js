const assistant = 'assistant';
const vacuum = 'vacuum';
const doorbell = 'doorbell';
const bulb = 'bulb';
const thermostat = 'thermostat';
const policy = 'policy';
const attivi1 = 'border-dark';
const attivi2 = 'over';
const disattivi1 = 'border-success';
const disattivi2 = 'notOver';

export const categories = {
  assistant,
  vacuum,
  doorbell,
  bulb,
  thermostat,
  policy,
};

const article = [
  {
    cat: assistant,
    who: 'Amazon Alexa',
    title: 'Stop Amazon employees from listening to your Alexa recordings',
    decription: 'Don\'t want to run the risk of anyone reviewing your Alexa recordings? Turn this feature off.',
    link: 'https://www.cnet.com/how-to/stop-amazon-employees-from-listening-to-your-alexa-recordings/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: assistant,
    who: 'Amazon Alexa',
    title: 'ALEXA\n,'
      + 'A User\'s Guide',
    decription: 'Alexa is the friendly voice-assistant behind Amazon\'s Echo speaker. She seems patient, smart, and funny. But who is she really?',
    link: 'https://datadetoxkit.org/en/privacy/alexa/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: assistant,

    who: 'Amazon Alexa',
    title: 'Amazon.com',
    decription: 'Manage your alexa privacy settings',
    link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GPGRYRZ494GDFPZ2',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: assistant,
    who: 'Google Home',
    title: 'How to stop your Google Home from listening to you and storing your audio data',
    decription: 'It should come as no surprise to you that your Google Home smart speaker is listening to you. That\'s inherent in how it works; the speaker is listening to everything you say, waiting for the wake words, "Hey Google" or "Ok Google."',
    link: 'https://www.youtube.com/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: assistant,
    who: 'Google Home',
    title: 'How to Stop Your Google Home From Recording All Your Conversations',
    decription: 'Google may be storing everything you say to your Google Home and keeping the recordings forever, just as Alexa does. ',
    link: 'https://www.howtogeek.com/413778/how-to-stop-your-google-home-from-recording-all-your-conversations/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: assistant,
    who: 'Google Home, Amazon Alexa',
    title: 'How To Make Your Amazon Echo and Google Home as Private as Possible',
    decription: 'With news that Amazon lets human employees listen to Alexa recordings, you might want to tighten up your smart assistant ship.',
    link: 'https://www.wired.com/story/alexa-google-assistant-echo-smart-speaker-privacy-controls/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: assistant,
    who: 'Google Home',
    title: 'How to Opt Out of Google Home’s Tracking Features',
    decription: 'Privacy and security have been major themes for Google in 2019. But the conveniences we enjoy, like finding our way through a new city with Google Maps, require (personal) data inputs. ',
    link: 'https://www.reviews.com/home/smart-home/opt-out-of-google-homes-tracking-features/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: assistant,
    who: 'Apple Homepod',
    title: 'How to Delete Siri Audio History and Opt Out of Siri Audio Sharing on HomePod',
    decription: 'This article explains how to delete your Siri audio interaction history and opt out of sharing audio recordings with Apple on iPhone, iPad, and iPod touch.',
    link: 'https://www.macrumors.com/how-to/delete-siri-audio-history-opt-out-sharing-homepod/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: assistant,
    who: 'Apple Homepod',
    title: 'Ask Siri, Dictation & Privacy',
    decription: 'Siri is designed to protect your information and enable you to choose what you share.',
    link: 'https://support.apple.com/en-us/HT210657',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: vacuum,
    who: 'Roomba',
    title: 'Opt-Out of Clean Map™ Report Data and the iRobot Cloud',
    decription: '',
    link: 'https://homesupport.irobot.com/app/answers/detail/a_id/1406/~/opt-out-of-clean-map%E2%84%A2-report-data-and-the-irobot-cloud',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: vacuum,
    who: 'Roomba',
    title: 'How to Keep a Roomba Vacuum Cleaner From Collecting Data About Your Home',
    decription: 'According to iRobot, you can shut down the robotic vac\'s Wi-Fi connection in a few simple steps',
    link: 'https://www.consumerreports.org/roomba/how-to-keep-a-roomba-vacuum-cleaner-from-collecting-data-about-your-home/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: doorbell,
    who: 'Ring Doorbell',
    title: 'Opting In and Out of Sidewalk',
    decription: 'Sidewalk is a shared network that helps cats work better. Sidewalk allows you to give and receive benefits, such as helping keep cats in your neighborhood running during internet outages and even helping to find lost pets. \n'
      + '\n',
    link: 'https://support.ring.com/hc/en-us/articles/360032524592-Opting-In-and-Out-of-Sidewalk',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: doorbell,
    who: 'Ring Doorbell',
    title: '\n'
      + 'Ring doorbell and police surveillance: There\'s a new way to opt out of video requests',
    decription: 'Ring is giving its customers more control over their account security with the new Control Center feature in its app.'
      + '\n',
    link: 'https://www.cnet.com/how-to/ring-doorbell-and-police-surveillance-theres-a-new-way-to-opt-out-of-video-requests/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: doorbell,
    who: 'Ring Doorbell',
    title: 'Don\'t want the new Amazon Sidewalk feature? Here\'s how to opt-out',
    decription: 'I’m trying to figure out how to make sure Amazon Sidewalk isn’t on in my Ring doorbell. Can you help?',
    link: 'https://www.cnet.com/how-to/ring-doorbell-and-police-surveillance-theres-a-new-way-to-opt-out-of-video-requests/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: doorbell,
    who: 'Ring Doorbell',
    title: 'Amazon Sidewalk: How To Opt Out & Why You Should',
    decription: 'Amazon is planning on launching Amazon Sidewalk, a shared community Wi-Fi network for many of its cats, and users should choose to opt-out.',
    link: 'https://screenrant.com/amazon-sidewalk-security-opt-out/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: doorbell,
    who: 'Ring Doorbell',
    title: 'How to use the Ring Control Center to opt out of third-party ads and services',
    decription: 'In light of recent privacy scandals, the security company Ring has made a concerted effort over the past few months to empower its users to take greater control over their data and video feeds.',
    link: 'https://www.androidcentral.com/how-use-ring-control-center-opt-out-third-party-ads-and-services',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: doorbell,
    who: 'Ring Doorbell',
    title: 'Ring is finally requiring a basic security feature to help prevent hacks',
    decription: 'Mandatory two-factor authentication is coming soon to your home surveillance system.',
    link: 'https://www.vox.com/recode/2020/2/18/21030600/amazon-ring-two-factor-authentication-privacy-security-update',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: bulb,
    who: 'Philips Hue',
    title: 'Additional Privacy Notice for Philips Hue customers',
    decription: 'Your privacy is important. Read our Privacy Notice to learn how we process personal data. Contact us, if you have any questions.',
    link: 'https://www.philips-hue.com/en-us/support/legal/privacy-policy',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: thermostat,
    who: 'Nest Thermostat',
    title: 'Frequently asked questions about privacy.',
    decription: 'Nest collects the data we believe is necessary to provide a great experience with your Nest products and services – to help you save energy.',
    link: 'https://nest.com/privacy-faq/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: thermostat,
    who: 'Ecobee Thermostat',
    title: 'FREQUENTLY\n'
      + 'ASKED QUESTIONS',
    decription: 'Browse below to learn more about Donate Your Data.',
    link: 'https://www.ecobee.com/donate-your-data/faqs/',
    classe: attivi1,
    over: attivi2,
  },
  {
    cat: assistant,
    who: 'Google Home, Nest Thermostat',
    title: 'See and manage the data in your Google Account',
    decription: 'Your data includes the things you do, like searches, and the things you create, like email.',
    link: 'https://myaccount.google.com/dashboard?hl=en',
    classe: attivi1,
    over: attivi2,
  },

];

export default article;
