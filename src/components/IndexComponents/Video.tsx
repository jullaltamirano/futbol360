import ReactPlayer from 'react-player/youtube'
// import videoPrincipal from '../../assets/video-principal.mp4'

export const Video = () => {
   return (
      <ReactPlayer 
         url={ 'https://www.youtube.com/shorts/2v6feJbo4Bc' }
         config={{
            youtube: {
               playerVars: {
               modestbranding: 1, // Quita logo grande de YouTube en controles
               rel: 0,             // No muestra videos relacionados de otros canales
               showinfo: 0,        // Ya no tiene efecto, pero lo puedes dejar
               }
            }
         }}
         width={ '100%' }
         height={ '100%' }
         playing={ true }
         controls={ false }
         loop={ true }
         muted={ true }
      />
   )
}
