import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Button, Header, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

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
    const goBack = () => navigation.goBack()
    const nextScreen = () => navigation.navigate("dailyWorkflowIntroduction")
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    return (
      <View style={ROOT}>
        <Header
          leftIcon="back"
          onLeftPress={goBack}
        />
        <AutoImage source={header} style={HEADER} />
        <Text text="The world's hot(test) grill." preset="catchphrase" />
        <Button
          testID="next-screen-button"
          tx="welcomeScreen.continue"
          style={CONTINUE}
          textStyle={CONTINUE_TEXT}
          onPress={nextScreen}
        />
      </View>
    )
  },
)
