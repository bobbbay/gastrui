import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const DailyWorkflowModel = types.model("DailyWorkflow").props({
    index: 0,
  })
  .actions((self) => ({
    increment() {
      self.index += 1;
    },

    decrement() {
      self.index -= 1;
    },

    reset() {
      self.index = 0;
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type DailyWorkflowType = Instance<typeof DailyWorkflowModel>
export interface DailyWorkflow extends DailyWorkflowType {}
type DailyWorkflowSnapshotType = SnapshotOut<typeof DailyWorkflowModel>
export interface DailyWorkflowSnapshot extends DailyWorkflowSnapshotType {}
export const createDailyWorkflowDefaultModel = () => types.optional(DailyWorkflowModel, {})
