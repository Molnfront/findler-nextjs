/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Label,
  Image,
  Button,
} from 'theme-ui';
/* import { jsx } from 'theme-ui';*/
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';
import findler from 'assets/images/findlerlogo7.png';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
       <Image src={findler} alt="findler" />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [61, null, '100%'],
    },
  },
};
