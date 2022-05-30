import React from 'react'
import { Grid } from '@mui/material'
import { Image } from '@mui/icons-material'
import { CardMedia } from '@mui/material'
import { Link } from 'react-router-dom';
import Homes from '../Page/Homes';

const Catalogue = () => {
  return (
          <>
<container fixed >
      <Grid container  spacing={1}>

      <div className='products_card'>

      <Grid item xs={12} sm={6} md={4}>

      <Homes image="./img/tutari.jpeg"
          price="2000" 
          title="Tutari" 
          description="Tutari is played on occasions as a sign of welcome and was originally made from buffalo horn. Crescent or 'C' shaped, this instrument is played to announce the arrival of kings, palkis (palanquins) and these days, the VVIP's on stage and also during the ceremonies at the forts and at rallies"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        
          <Homes image="./img/turban.jpg"
          price="1000" 
          title="Turban" 
          description="One of the long standing customs in Maharashtra is that of men wearing Phetas (turbans) for weddings. Always worn with ethnic outfits, the most popular Indianz"
          />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>

          <Homes image="./img/Doli.jpeg" 
          price="15000" 
          title="Bridal Palki"
          description="Doli or palki touches the heart and connects with everyone as this is the last time when a daughter is being bored by father and her brothers as their own, and a moment when they handover their most pampered, the core of the heart to a new family where they pray for her to flourish in the best possible way"/>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>

          <Homes image="./img/dj.jpeg" 
          price="20000" 
          title="DJ Sound" 
          description="A sound system is a group of DJs and audio engineers contributing and working together as ... In this context the word sound system is used interchangeably"/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>


          <Homes image="./img/pyro.jpg" 
                  price="1500" 
                  title="Cold Pyro" 
                  description="This fireworks like fountain of sparkler its look this fireworks is cold and this type of umbrella is used in wedding entry for bride and groom."/>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>

          <Homes image="./img/paper.jpeg" 
                  price="1000" 
                  title="Colorful Paper Blast" 
                  description="Confetti Paper Blast ... Can be used for stage effects, birthday, marriage entry, product launch, cultural events and so on."/>

          </Grid>

          <Grid item xs={12} sm={6} md={4}>

          <Homes image="./img/smoke.jpeg" 
                  price="2000" 
                  title="Fog Machine" 
                  description="Dry ice fog machine is a device to produce low-lying clouds, widely uses for atmosphere effects industry, wedding, parties, Halloween, ..."/>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Homes image="./img/hand.jpeg" 
                  price="15000" 
                  title="Hand & feat CAsting" 
                  description="Capture your moments with baby hand casting India,hand and feet casting,baby foot impressions,baby hand and footprint,baby hand casts,Hand Casting,Baby ..."/>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>

          <Homes image="./img/umb.jpeg" 
                  price="2000" 
                  title="Groom Umbrella" 
          description="Indian wedding umbrella Wedding Props, Indian Wedding Decorations, Sikh Wedding, Wedding Dinner,. Dianne Morstad. 7k followers. More information.
          wedding umbrella description from in.pinterest.com
          "/>
          </Grid>

        <Grid item xs={12} sm={6} md={4}>

        <Homes image="./img/car.cms" 
                price="20000" 
                title="Vintage car for wedding" 
        description="We are a car rental agency that provides vintage cars on rent for wedding in Delhi/NCR at affordable price. Feel royal, hire vintage car."/>
        </Grid>


          </div>
     </Grid>
     
        
     
</container>  

</>
)
}


export default Catalogue;