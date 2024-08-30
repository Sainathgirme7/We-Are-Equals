export const defaultPose = (ref, customPose = null) => {
  if (!ref || !ref.characters || !ref.animations || typeof ref.animate !== 'function') {
      console.error('Invalid reference object provided.');
      return;
  }

  ref.characters.push(' ');

  let animations = [];
  
  // Default Pose Configuration
  const defaultPoseConfig = [
      { bone: "mixamorigNeck", axis: "x", value: Math.PI / 12, direction: "+" },
      { bone: "mixamorigLeftArm", axis: "z", value: -Math.PI / 3, direction: "-" },
      { bone: "mixamorigLeftForeArm", axis: "y", value: -Math.PI / 1.5, direction: "-" },
      { bone: "mixamorigRightArm", axis: "z", value: Math.PI / 3, direction: "+" },
      { bone: "mixamorigRightForeArm", axis: "y", value: Math.PI / 1.5, direction: "+" }
  ];

  // Use custom pose if provided, otherwise use default pose
  const poseConfig = customPose || defaultPoseConfig;

  // Apply pose configuration to animations array
  poseConfig.forEach(({ bone, axis, value, direction }) => {
      animations.push([bone, "rotation", axis, value, direction]);
  });

  ref.animations.push(animations);

  if (!ref.pending) {
      ref.pending = true;
      ref.animate();
  }
}
