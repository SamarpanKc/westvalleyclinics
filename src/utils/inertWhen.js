// React 18 has no boolean `inert` prop, so the attribute is spread in as a string:
// <div {...inertWhen(!isOpen)}>
export const inertWhen = (condition) => (condition ? { inert: "" } : {});
