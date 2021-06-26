type all = string | number | boolean | undefined | null | all[] | objects;
type objects = {[name: string]: all};