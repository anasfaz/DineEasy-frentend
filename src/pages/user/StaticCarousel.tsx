import { Carousel } from 'flowbite-react'

export default function StaticCarousel() {
  return (
    <div  className="relative w-full" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    <Carousel className="relative w-full p-10">
        
        <img
          
          alt="..."
          src="https://d4t7t8y8xqo0t.cloudfront.net/resized/1920X400/%2Fhome%2Fslider%2Fdesktop%2Featout-web-banner.png"
        />

        <img  className=""
          alt="..."
          src="https://d4t7t8y8xqo0t.cloudfront.net/resized/1920X400/home%2Fslider%2Fdesktop%2Fcurated_with_care_desktop.png"
        />
        {/* <img  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
          src=""
        /> */}
        
       
     
    </Carousel>
    </div>
    
    
</div>

      
    
  )
}
