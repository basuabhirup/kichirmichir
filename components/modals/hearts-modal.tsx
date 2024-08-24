"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useHeartsModal } from "@/store/use-hearts-modal"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export const HeartsModal = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState<boolean>(false)
  const { isOpen, close } = useHeartsModal()

  useEffect(() => {
    setIsClient(true)
  }, [])
  // To avoid any potential hydration error
  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/mascot_bad.svg" alt="Mascot" height={80} width={80} />
          </div>
        </DialogHeader>
        <DialogTitle className="text-center font-bold text-2xl">
          You ran out of hearts!
        </DialogTitle>
        <DialogDescription className="text-center text-base">
          Practice previous lessons to refill your hearts.
        </DialogDescription>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primaryOutline"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Okay. Got it!
            </Button>
            <Button
              variant="primary"
              className="w-full"
              size="lg"
              onClick={() => {
                close()
                router.push("/shop")
              }}
            >
              Get unlimited hearts
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
