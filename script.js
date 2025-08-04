document.addEventListener("DOMContentLoaded", () => {
  // Utility function to log errors for missing elements
  function assertElementExists(element, description) {
    if (!element) {
      console.error(`Error: ${description} element not found in the DOM.`);
    }
  }

  // Select the Utility Hydraulic System block
  const utilityHydraulicSystem = document.querySelector(
    "#utility-hydraulic-system"
  );
  assertElementExists(utilityHydraulicSystem, "Utility Hydraulic System");

  // Select the Booster Hydraulic System block
  const boosterHydraulicSystem = document.querySelector(
    "#new-hydraulic-system"
  );
  assertElementExists(boosterHydraulicSystem, "Booster Hydraulic System");

  // Select the Ground Test Checkout Valve block
  const groundTestCheckoutValve = document.querySelector("#new-block");
  assertElementExists(groundTestCheckoutValve, "Ground Test Checkout Valve");

  // Select the Auxiliary Hydraulic Pump block
  const auxiliaryHydraulicPump = document.querySelector(
    "#auxiliary-hydraulic-system"
  );
  assertElementExists(auxiliaryHydraulicPump, "Auxiliary Hydraulic Pump");

  // Select blocks 1-8 for Utility Hydraulic System
  const blocks = [
    document.querySelector("#block1"),
    document.querySelector("#block2"),
    document.querySelector("#block3"),
    document.querySelector("#block4"),
    document.querySelector("#block5"),
    document.querySelector("#block6"),
    document.querySelector("#block7"),
    document.querySelector("#block8")
  ].filter(Boolean);
  console.log("Blocks 1-8:", blocks);

  // Select blocks 1-3 for Booster Hydraulic System
  const boosterBlocks = [
    document.querySelector("#block1"),
    document.querySelector("#block2"),
    document.querySelector("#block3")
  ].filter(Boolean);
  console.log("Booster Blocks 1-3:", boosterBlocks);

  // Select additional blocks for Ground Test Checkout Valve and Auxiliary Hydraulic Pump
  const additionalGroundTestBlocks = [
    document.querySelector("#cargo-ramp-door"),
    document.querySelector("#emergency-brakes"),
    document.querySelector("#nose-landing-gear-emergency")
  ].filter(Boolean);
  console.log("Additional Ground Test Blocks:", additionalGroundTestBlocks);

  // Merge blocks 1-8 and additional blocks for Ground Test Checkout Valve
  const groundTestBlocks = [...blocks, ...additionalGroundTestBlocks];
  console.log("Ground Test Blocks (center + additional):", groundTestBlocks);

  // Select specific blocks for the Auxiliary Hydraulic Pump
  const auxiliaryBlocks = [
    document.querySelector("#cargo-ramp-door"),
    document.querySelector("#emergency-brakes"),
    document.querySelector("#nose-landing-gear-emergency")
  ].filter(Boolean);
  console.log("Auxiliary Blocks:", auxiliaryBlocks);

  // Add click event listener for the Utility Hydraulic System block
  if (utilityHydraulicSystem) {
    let isUtilityHighlighted = false;

    utilityHydraulicSystem.addEventListener("click", () => {
      console.log(
        "Utility Hydraulic System Clicked, current state:",
        isUtilityHighlighted
      );
      blocks.forEach((block) => {
        block.classList.toggle("utility-highlight", !isUtilityHighlighted);
        console.log(
          `Toggling utility-highlight for block: ${
            block.id
          }, new state: ${!isUtilityHighlighted}`
        );
      });

      isUtilityHighlighted = !isUtilityHighlighted;
    });
  }

  // Add click event listener for the Booster Hydraulic System block
  if (boosterHydraulicSystem) {
    let isBoosterHighlighted = false;

    boosterHydraulicSystem.addEventListener("click", () => {
      console.log(
        "Booster Hydraulic System Clicked, current state:",
        isBoosterHighlighted
      );
      boosterBlocks.forEach((block) => {
        block.classList.toggle("booster-highlight", !isBoosterHighlighted);
        console.log(
          `Toggling booster-highlight for block: ${
            block.id
          }, new state: ${!isBoosterHighlighted}`
        );
      });

      isBoosterHighlighted = !isBoosterHighlighted;
    });
  }

  // Add click event listener for the Ground Test Checkout Valve
  if (groundTestCheckoutValve) {
    let isGroundTestHighlighted = false;

    groundTestCheckoutValve.addEventListener("click", () => {
      console.log(
        "Ground Test Checkout Valve Clicked, current state:",
        isGroundTestHighlighted
      );
      groundTestBlocks.forEach((block) => {
        if (block) {
          block.classList.toggle(
            "ground-test-highlight",
            !isGroundTestHighlighted
          );
          console.log(
            `Toggling ground-test-highlight for block: ${
              block.id
            }, new state: ${!isGroundTestHighlighted}`
          );
        }
      });

      isGroundTestHighlighted = !isGroundTestHighlighted;
    });
  }

  // Add click event listener for the Auxiliary Hydraulic Pump
  if (auxiliaryHydraulicPump) {
    let isAuxiliaryHighlighted = false;

    auxiliaryHydraulicPump.addEventListener("click", () => {
      console.log(
        "Auxiliary Hydraulic Pump Clicked, current state:",
        isAuxiliaryHighlighted
      );
      auxiliaryBlocks.forEach((block) => {
        if (block) {
          block.classList.toggle(
            "auxiliary-highlight",
            !isAuxiliaryHighlighted
          );
          console.log(
            `Toggling auxiliary-highlight for block: ${
              block.id
            }, new state: ${!isAuxiliaryHighlighted}`
          );
        }
      });

      isAuxiliaryHighlighted = !isAuxiliaryHighlighted;
    });
  }
});
