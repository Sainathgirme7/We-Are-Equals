export const LIFE = (ref) => {

    let animations = [];

    // First set of animations for the word "LIFE"
    animations.push(["mixamorigSpine", "rotation", "x", -Math.PI/8, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", Math.PI/6, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", -Math.PI/4, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", -Math.PI/6, "-"]);
    animations.push(["mixamorigHead", "rotation", "y", Math.PI/12, "+"]);

    ref.animations.push(animations);

    animations = [];

    // Resetting the animations for the word "LIFE"
    animations.push(["mixamorigSpine", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigHead", "rotation", "y", 0, "-"]);

    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }

}
