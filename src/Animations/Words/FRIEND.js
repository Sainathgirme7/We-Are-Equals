export const FRIEND = (ref) => {

    let animations = [];

    // First set of animations for the word "FRIEND"
    animations.push(["mixamorigNeck", "rotation", "x", -Math.PI/10, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/8, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/8, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);
    animations.push(["mixamorigSpine", "rotation", "y", Math.PI/12, "+"]);

    ref.animations.push(animations);

    animations = [];

    // Resetting the animations for the word "FRIEND"
    animations.push(["mixamorigNeck", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigSpine", "rotation", "y", 0, "-"]);

    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }

}
