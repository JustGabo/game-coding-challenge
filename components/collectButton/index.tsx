"use client"
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import useGamesStore from '@/stores/gamesStore'
import { Game } from '@/app/types/game'

interface CollectButtonProps{
  game: Game
}

const CollectButton = ({game}: CollectButtonProps) => {

  const {addGame, isGameCollected} = useGamesStore()

  const isCollected = isGameCollected(game.id)

  useEffect(()=>{
    console.log(isCollected)
  },[isCollected])

  return (
    <Button onClick={()=> addGame(game)} style={{backgroundColor: isCollected ? "white" : "#3C1661", color: isCollected ? "#3C1661" : "white", border: isCollected ? "1px solid #3C1661" : "none"}} className={`w-full rounded-full h-[45px] `}>Collect game</Button>
  )
}

export default CollectButton
