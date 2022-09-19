import IconLinkedin from './linkedin';
import IconGitHub from './github';
import IconCodepen from './codepen';
import IconLogo from './logo';
import IconExternal from './external';
import IconStackoverflow from './stackoverflow';  

const Icon = ({ name }) => {
    switch (name) {
        case 'Codepen':
            return <IconCodepen />;
        case 'GitHub':
            return <IconGitHub />;
        case 'Linkedin':
            return <IconLinkedin />;
        case 'Logo':
            return <IconLogo />;
        case 'Stackoverflow':
            return <IconStackoverflow />;
        default:
            return <IconExternal />;
    }
};
  
  export default Icon;