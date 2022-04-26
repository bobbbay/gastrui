import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Button, Header, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: "#000B26",
  flex: 1,
}

const header = require("../../screens/daily-workflow-introduction/chronogrill-header.svg")

const HEADER: ImageStyle = {
  alignSelf: "center",
}

const CONTINUE: ViewStyle = {
}

const CONTINUE_TEXT: TextStyle = {
  alignSelf: "flex-end",
}

export const DailyWorkflowIntroductionScreen: FC<StackScreenProps<NavigatorParamList, "dailyWorkflowIntroduction">> = observer(
  ({ navigation }) => {
    const { dwfStore } = useStores()

    const goBack = () => dwfStore.decrement();

    return (
      <View style={ROOT}>
        <Header
          leftIcon="back"
          onLeftPress={goBack}
        />
        {dwfToView(dwfStore.index)}
      </View>
    )
  },
)

function dwfToView(index: number): JSX.Element {
  const { dwfStore } = useStores()
  const nextScreen = () => dwfStore.increment();

  switch (index) {
    case 0: return (
      <View>
        <AutoImage source={header} style={HEADER} />
        <Text text="The world's hot(test) grill." preset="catchphrase" />
        <Button
          testID="next-screen-button"
          tx="welcomeScreen.continue"
          style={CONTINUE}
          textStyle={CONTINUE_TEXT}
          onPress={nextScreen}
        />
      </View>)

    case 1: return (
      <View>
        <Text text="Begin daily cleanup" preset="header" />
        <Text text="Refer to operator manual" preset="additional" />
        <Button
          testID="next-screen-button"
          tx="welcomeScreen.continue"
          style={CONTINUE}
          textStyle={CONTINUE_TEXT}
          onPress={nextScreen}
        />
      </View>
    )
    case 2: return (
      <View>
        <Text text="Fire it up!" preset="header" />
        <Text text="Turn on six burners" preset="additional" />
        <Button
          testID="next-screen-button"
          tx="welcomeScreen.continue"
          style={CONTINUE}
          textStyle={CONTINUE_TEXT}
          onPress={nextScreen}
        />
      </View>
    )
    case 3: return (
      <View>
        <Text text="Heating up" preset="header" />
        <Text text="Waiting to reach 400°F,
                    Wait until notified to proceed" preset="additional" />
        <Button
          testID="next-screen-button"
          tx="welcomeScreen.continue"
          style={CONTINUE}
          textStyle={CONTINUE_TEXT}
          onPress={nextScreen}
        />
      </View>
    )
    default: return dwfToView(0)
  }
}
