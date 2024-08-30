export const WORLD = (ref) => {

    let animations = [];

    // First set of animations for the word "WORLD"
    animations.push(["mixamorigSpine", "rotation", "y", Math.PI/8, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", -Math.PI/4, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigHips", "rotation", "y", -Math.PI/8, "-"]);
    animations.push(["mixamorigHead", "rotation", "y", Math.PI/12, "+"]);

    ref.animations.push(animations);

    animations = [];

    // Resetting the animations for the word "WORLD"
    animations.push(["mixamorigSpine", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigHips", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigHead", "rotation", "y", 0, "-"]);

    ref.animations.push(animations);

    if (ref.pending === false) {
        ref.pending = true;
        ref.animate();
    }

}
