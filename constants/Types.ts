// --------------Checklist types--------------
export type StepDetail = {
  stepName: string;
  details: string;
  subSteps?: (StepDetail | { subStepName: string; details: string; })[];
};

export type Operation = {
  operationName?: string;
  steps: StepDetail[];
};

export type Subtopic = {
  name: string;
  operations: Operation[];
};

export type ChecklistItem = {
  title: string;
  background: string;
  subtopics: Subtopic[];
};

export type Checklist = ChecklistItem[];
