import React, { useEffect, useState } from 'react'
import * as videoService from '../../services/Video.service'

export const VideosList = () => {

  const [videos, setVideos] = useState([])

  const loadVideos = async () => {
    const { data } = await videoService.getVideos()
    setVideos(data)
  }
  useEffect(() => {
    loadVideos()
  }, [])

  return (
    <div>
      { videos.map((video) => {
        return <div>
          <h1>{ video.title }</h1>
        </div>
      }) }
    </div>
  )
}

export default VideosList