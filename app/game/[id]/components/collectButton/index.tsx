"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../../../../../components/ui/button'
import useGamesStore from '@/stores/gamesStore'
import { Game } from '@/app/types/game'
import { toast } from '@/hooks/use-toast'

interface CollectButtonProps{
  game: Game
}

const CollectButton = ({game}: CollectButtonProps) => {

  const {addGame, isGameCollected} = useGamesStore()
  // const [isCollected, setIsCollected] = useState(isGameCollected(game.id))

  const isCollected = isGameCollected(game.id)

  const collectGame = ()=>{
    addGame(game)
    toast({
      title: "Game added to collection",
    });
  }

  return (
    <Button onClick={collectGame} style={{backgroundColor: isCollected ? "white" : "#3C1661", color: isCollected ? "#3C1661" : "white", border: isCollected ? "1px solid #3C1661" : "none"}} className={`w-full rounded-full h-[45px] `}>Collect game</Button>
  )
}

export default CollectButton
