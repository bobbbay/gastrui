import { DailyWorkflowModel } from "./daily-workflow"

test("can be created", () => {
  const instance = DailyWorkflowModel.create({})

  expect(instance).toBeTruthy()
})
