import {
  Theme,
  XStack,
  YStack,
} from '@my/ui'
import { CustomButton } from '@my/ui/src'
import React from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <XStack>
      <Theme name="core1">
        <CustomButton {...linkProps} theme="primary">Link to user</CustomButton>
      </Theme>
      </XStack>
    </YStack>
  )
}
