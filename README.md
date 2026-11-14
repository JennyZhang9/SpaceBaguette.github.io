# Astro Sensor

## 1. What we built

We are Space Baguettes, and we built Astro Sensor for the 2026 NASA Space Apps Challenge. Our project explores how astronauts on long missions could notice changes in their health, make sense of those changes, and decide what to check next when support from Earth may be limited.

| Step | How Astro Sensor supports it |
| --- | --- |
| **Gather** | Log readings and daily context in a private journal, view live heart rate from a compatible Bluetooth sensor, and set a daily check-in reminder. |
| **Evaluate** | Replay real clinical recordings, chart personal entries, and compare hypothetical health patterns across spacecraft, space station, rover, and base scenarios. |
| **Act** | Use the check-in breakdown to see what drove a change and what to review next, such as measurement conditions, rest opportunities, or a conversation with the crew support team. |

We keep three kinds of information distinct: measured research recordings, simulated scenarios, and entries you supply. Our check-in index is an educational prototype. It cannot diagnose a condition, establish that someone is healthy, or replace a mission medical protocol.

### Open Astro Sensor

Published website: [Open Astro Sensor](https://jennyzhang9.github.io/SpaceBaguette.github.io/astra-pulse/index.html?refresh=20261114-mission1).

To run it locally, open the root `index.html` or `astra-pulse/index.html`. No account or build step is required. The core app and bundled datasets work from local files. For a local HTTP preview, run `node astra-pulse/preview.cjs` and open the address it prints. Bluetooth and desktop notifications depend on browser support and permissions.

## 2. How to use it

### Home: replay real readings

Choose one of six BIDMC clinical recordings. Drag the recording slider or press **Play recording** to follow heart rate, breathing rate, oxygen saturation, and pulse. The chart and reading cards follow the selected second. Missing samples stay missing. These recordings were collected on Earth; they are not astronaut reference values.

### What if?: explore a mission scenario

1. Pick **Spacecraft**, **Space station**, **Rover**, or **Base**, then select **Load example values**. Each environment provides a short mission context and editable example inputs. You can also choose an activity preset or load a profile from **Sleep data**.
2. Adjust sleep, heart rate, blood pressure, stress, and sweat with sliders or number fields. Select a plotted measurement and move **Viewing day** to see how the hypothetical timeline changes. The selected changes build from day 11 to day 20.
3. Read the selected day’s check-in breakdown and next steps. Open **How is this index calculated?** to see the weights and limitations.
4. Open **Show advanced model settings** to choose a source recording and seed, generate another trace, or export the scenario as CSV.

We use the same experimental score bands on the score card and simulated trend plot:

| Color | Label | Demo score |
| --- | --- | --- |
| Green | Steady | 75–100 |
| Yellow | Keep watch | 50–74 |
| Red | Needs attention | 25–49 |
| Crimson | Highest demo concern | 0–24, or a blood-pressure override |
| Neutral | No score | Insufficient inputs |

The plot colors each day by its **overall simulated check-in**, not by a clinical range for the selected measurement. Text labels and line patterns accompany the colors. A BP override suppresses the numeric score; the original research and raw journal plots remain neutral. The environment presets are illustrative and do not change medical thresholds.

### My journal: log readings and set goals

Choose a date and log the measurements you have, along with context such as a busy shift or recent exercise. Leave unknown values blank. You can enter a range such as `65-75`; we retain both endpoints in the table and CSV and use the midpoint for the plot and calculations. Saving the same date replaces that entry.

Entries remain in memory unless you select **Save this journal in this browser**. That option stores them in the current browser profile, where someone sharing the browser may also see them. We don’t upload journal entries. You can export a CSV, delete individual entries, or clear the journal.

Choose a measurement to see its trend. With at least five paired sleep and heart-rate entries, we show a correlation. With at least three heart-rate entries, we show a simple estimate based on up to seven recent readings. Neither proves cause and effect or predicts illness. You can also set sleep and movement goals here; saved goals appear on the watch preview and can be exported as CSV.

### Devices: explore sensors, connect heart rate, and set reminders

Rotate the watch, ear sensor, or cuff concept and select a sensor to learn what it could measure and what can affect the reading. The 3D designs are educational illustrations. They do not take readings or send goals to real devices.

On a compatible browser, **Connect heart-rate device** can display live readings from a nearby Bluetooth device that exposes the standard Heart Rate service. The connection is read-only; live readings do not automatically enter the journal. We have not validated pairing on physical hardware.

Under **Bluetooth device tools**, set a daily check-in time, send a test reminder, and optionally allow desktop notifications. A reminder links to **My journal** and does not require a connected sensor. It can appear while the app is open or when you open it after the scheduled time. It does not run while the site is closed, send a message to a wearable, or act as a medical alarm.

### Wellbeing guide, Sleep data, and project resources

- **Wellbeing guide:** Read practical suggestions across seven dimensions of wellbeing, play an optional ambient sound, or follow a paced seated movement guide. Sound and movement stop when you leave the page.
- **Sleep data:** Explore 374 synthetic profiles in a scatter plot, view sample rows, or download the original CSV. Loading a profile into a scenario copies its inputs; it does not replay that person’s history.
- **Ask Helios:** Ask how to use the site, what a score means, or where the data came from. Helios searches a curated guide, remembers the last topic for short follow-ups, and links to relevant pages. It runs locally and does not provide medical advice.
- **Data & science:** See how we distinguish recorded, simulated, and personal data. Expand the methods section for sources, assumptions, and limitations.
- **Meet the team:** See the six team cards.
- **Appearance:** Switch between dark and light themes or choose the reading font with extra spacing. The browser remembers your choices.

## 3. How it works

### Code map

| Files in `astra-pulse/` | Role |
| --- | --- |
| `index.html`, `experience.js` | App entry point, navigation, plots, scenario controls, and journal |
| `astro.js`, `cuff-model.js`, `comfort.js` | Devices, goal previews, journal insights, appearance, and wellbeing activities |
| `mission.js`, `mission.css` | Mission presets, reminder scheduling, and accessible status bands |
| `health-engine.js` | Isolation Forest, scenario generation, and index and next-step logic |
| `research-data.js`, `prepare-data.cjs` | Bundled BIDMC recordings and data preparation |
| `sleep-data.js`, `sleep-health.csv`, `sleep-model.js` | Synthetic sleep profiles, explorer, and sleep-quality regressor |
| `prepare-sleep.py`, `sleep-provenance.json` | Sleep dataset preparation and attribution |
| `pulse.js` | Helios conversation UI and local document retrieval |

Helios ranks curated answers using TF-IDF, synonym expansion, and the current page as a tie-break. It keeps conversation context in memory and uses no external AI service or generative language model. The timer checks the device’s local clock and stores the last reminder date in the browser to avoid repeating the daily reminder.

### Research data and license

BIDMC PPG and Respiration Dataset v1.0.0, records 01–06. Each has 481 original numerical rows at one-second intervals, 0–480 seconds: time, HR, pulse, respiration and SpO₂. Total: 2,886 observations. Values are downloaded without interpolation or changes; NaN is preserved as null. These are clinical monitor numerics from Earth, not healthy astronaut norms or raw ECG/PPG signals.

- Dataset: https://physionet.org/content/bidmc/1.0.0/
- Original CSV pattern: https://physionet.org/files/bidmc/1.0.0/bidmc_csv/bidmc_01_Numerics.csv (replace 01 with 02–06).
- Data license: Open Data Commons Attribution License v1.0, https://opendatacommons.org/licenses/by/1-0/
- Pimentel et al., Towards a Robust Estimation of Respiratory Rate from Pulse Oximeters, IEEE TBME 64(8), 1914–1923. DOI: 10.1109/TBME.2016.2613124.
- PhysioNet attribution: Pollard et al. (2026), PhysioNet as a global platform for biomedical research. DOI: 10.1038/s44360-026-00096-z.

To reproduce our BIDMC bundle, run `node astra-pulse/prepare-data.cjs` with internet access. We use NASA resources for mission context; we do not ingest NASA astronaut physiological data.

The [Sleep Health and Lifestyle Dataset by Laksika Tharmalingam](https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset) is also bundled under CC0 Public Domain. Its author explicitly describes it as synthetic data created for illustrative purposes. The downloaded CSV contains 374 rows, although the source overview mentions 400. It contains sleep duration/quality, HR, BP, stress, activity and demographic fields; BP strings are additionally parsed into numeric systolic and diastolic columns. It contains no sweat/EDA, respiration or SpO₂ measurements. Run `python astra-pulse/prepare-sleep.py` from the repository root to reproduce the download with internet access.

### Supervised sleep-quality training

The educational 5-nearest-neighbors regressor uses sleep duration, HR, reported stress, systolic BP and diastolic BP to estimate the source’s sleep-quality rating. Identical feature vectors are grouped before a deterministic 80/20 split, with each group’s target averaged. Training has 55 unique feature groups and testing has 14. Standardization is fitted on training groups only; five equally weighted neighbors provide each prediction.

Held-out mean absolute error is approximately 0.47 rating points. This evaluates reproduction of synthetic labels, not clinical accuracy or astronaut performance. Missing inputs produce no prediction, and inputs outside the training range display a notice. Sleep-disorder labels are retained in the original CSV but are not used to train a diagnostic model. This model is separate from the experimental wellbeing index and BIDMC generator.

### Generative model

HealthEngine.train() fits an empirical block-bootstrap generator to complete HR/respiration/SpO₂ observations in the selected record’s first 240 seconds. The observed multivariate distribution and short consecutive sequences form the fitted reference. Ten-row blocks are sampled deterministically from that reference.

HealthEngine.generate() uses the sampled physiological fluctuations in an explicitly synthetic daily timeline. HR is recentered from the clinical training mean to a hypothetical 62 bpm reference, then shifted toward the selected HR target. Other daily context values follow explicitly defined scenario transitions; they are not invented learned relationships. Missing sensor contact suppresses HR and SpO₂ at selected positions.

This is an empirical generative model, not a neural generator. Its fitting is distinct from the Isolation Forest’s anomaly training. Generating thousands of additional rows would not create more independent participants or scientific evidence. The 30-day timeline is synthetic, not eight minutes of data mislabeled as observed mission days.

### Isolation Forest training

HealthEngine.forest() trains 64 randomized isolation trees. Each selects at most 64 distinct observations and recursively splits a random nonconstant feature within its observed range. Maximum depth is ceil(log2(sample count)). A seeded generator ensures reproducibility. Terminal path lengths are adjusted for leaf size; the score is 2^(-average path length / c(n)), using the expected isolation-path correction c(n).

Scenario features are recentered HR, respiration and SpO₂. Training uses the original first 240 seconds, before scenario injections; the later half remains outside training. Only the selected record is used for a model, not a hidden pooled astronaut dataset.

Personal features are HR, sleep and reported stress from at least eight earlier complete journal entries. The newest chronological entry is excluded from training. The model reports familiarity relative to the reference distribution, not illness, fitness or psychological diagnosis. Missing any feature yields no ML score.

### Experimental wellbeing check-in index

ML pattern similarity contributes 30%; sleep context 30%; reported stress 30%; relative BP change 10%. Missing terms are excluded and available weights renormalized. ML anomaly score is converted to a bounded similarity term; sleep uses distance from an illustrative 7.5-hour reference, stress uses the supplied 0–10 rating, and BP uses deviation from the defined/reference history.

These are explicit design rules and unvalidated weights. No overall-wellbeing labels were available for supervised training. We use the index to explain our prototype’s inputs and next steps. It cannot capture all seven wellbeing dimensions. Sweat affects contextual next steps but is not used to diagnose stress or hydration.

Action suggestions explain rest, supportive conversations, changed patterns, repeat BP measurements and sensor context. A BP input above 180 systolic or 120 diastolic suppresses the aggregate index and prioritizes sourced AHA guidance instead of displaying a potentially reassuring score. This adult terrestrial guidance does not replace actual mission medical protocols.

### Verification and limits

From the repository root, run `node astra-pulse/verify-v2.cjs` for checks of bundled data, repeatable generation, the training-window boundary, missing data, and plot behavior. The `check-sleep.cjs`, `check-astro.cjs`, `check-comfort.cjs`, and `check-pulse.cjs` browser scripts cover the dataset explorer and core interactions. These browser scripts may require adjusting the Playwright path on another computer.

Our data and models do not establish astronaut norms or medical thresholds. Six short clinical recordings cannot represent a long-duration mission, and leaving out later time points from the same recording is not participant-level validation. The wearable concepts, scenario assumptions, and guidance would need domain review and testing before any operational use.

### Challenge and references

- [NASA Space Apps challenge: Create Health Monitoring Software for Astronauts on Space Missions](https://www.spaceappschallenge.org/2026/challenges/health-monitoring-software/)
- [NASA Human Research Program: Five hazards of human spaceflight](https://www.nasa.gov/hrp/hazards/)
- [NASA: Risk from inadequate sleep and irregular schedules](https://www.nasa.gov/reference/risk-from-inadequate-sleep-and-irregular-schedules/)
- [NHLBI: Self-measured blood pressure](https://www.nhlbi.nih.gov/resources/self-measured-blood-pressure-fact-sheet)
- [AHA: Guidance on very high blood pressure](https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/when-to-call-911-for-high-blood-pressure)
- [Optical sensing review](https://pmc.ncbi.nlm.nih.gov/articles/PMC9695300/) and [electrodermal activity review](https://pubmed.ncbi.nlm.nih.gov/36960675/)
