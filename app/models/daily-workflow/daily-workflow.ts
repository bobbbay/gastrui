import { Instance, SnapshotOut, types } from "mobx-state-tree"

const PAGES: number = 9;

/**
 * Model description here for TypeScript hints.
 */
export const DailyWorkflowModel = types.model("DailyWorkflow").props({
    index: 0,
  })
  .actions((self) => ({
    increment() {
      if (self.index < PAGES) {
        self.index += 1;
      } else {
        self.index = 0;
      }
    },

    decrement() {
      if (self.index > 0) {
        self.index -= 1;
      } else {
        self.index = PAGES;
      }
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
