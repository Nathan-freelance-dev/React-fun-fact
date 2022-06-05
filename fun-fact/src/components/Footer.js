import React from 'react'

const date = new Date();

let year = date.getFullYear()

const Footer = () => {
     return (
          <footer>
               <span>
                    &copy; {year}, All rights reserved.
               </span>
          </footer>
     )
}

export default Footer