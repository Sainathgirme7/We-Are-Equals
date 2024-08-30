export const DAY = (ref) => {

    let animations = [];

    // First set of animations for the word "DAY"
    animations.push(["mixamorigNeck", "rotation", "x", Math.PI/10, "+"]);
    animations.push(["mixamorigSpine", "rotation", "y", -Math.PI/12, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/8, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", Math.PI/8, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigHips", "rotation", "y", Math.PI/12, "+"]);

    ref.animations.push(animations);

    animations = [];

    // Resetting the animations for the word "DAY"
    animations.push(["mixamorigNeck", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigSpine", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigHips", "rotation", "y", 0, "-"]);

    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }

}
