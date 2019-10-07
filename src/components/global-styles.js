import { createGlobalStyle } from 'styled-components'

import Graphik from '../fonts/graphik-web/Graphik-Regular-Web.woff'


const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Graphik ;
    src: url${Graphik};
}

`
