# TrackMyDollar V5.0 - MyExpenseBot
![MIT license](https://img.shields.io/badge/License-MIT-green.svg)
[![Platform](https://img.shields.io/badge/Platform-Telegram-blue)](https://desktop.telegram.org/)
![GitHub](https://img.shields.io/badge/Language-Python-blue.svg)
[![GitHub contributors](https://img.shields.io/github/contributors/nainisha-b/MyExpenseBot)](https://github.com/nainisha-b/MyExpenseBot/graphs/contributors)
[![DOI](https://zenodo.org/badge/414661894.svg)](https://zenodo.org/badge/latestdoi/414661894)
[![Build Status](https://app.travis-ci.com/sak007/MyDollarBot-BOTGo.svg?branch=main)](https://app.travis-ci.com/github/sak007/MyDollarBot-BOTGo)
[![codecov](https://codecov.io/gh/sak007/MyDollarBot-BOTGo/branch/main/graph/badge.svg?token=5AYMR8MNMP)](https://codecov.io/gh/sak007/MyDollarBot-BOTGo)
[![GitHub issues](https://img.shields.io/github/issues/nainisha-b/MyExpenseBot)](https://github.com/nainisha-b/MyExpenseBot/issues?q=is%3Aopen+is%3Aissue)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/nainisha-b/MyExpenseBot)](https://github.com/nainisha-b/MyExpenseBot/issues?q=is%3Aissue+is%3Aclosed)
![Fork](https://img.shields.io/github/forks/nainisha-b/MyExpenseBot?style=social)
<hr>
<p align="center">
<a><img  height=25% width=25% 
  src="https://github.com/NCSU-Group70-CSC505-SE-Fall-23/MyExpenseBot/assets/70905787/9a750927-f4d0-4078-a49e-c90894371ed8" alt="Income and Expense tracking made easy!"></a>
</p>
<hr>

<p align="center">
  <a href="#movie_camera-checkout-our-video">Checkout our video</a>
  ::
  <a href="#rocket-installation">Installation</a>
  ::
  <a href="#computer-technology-used">Technology Used</a>
  ::
  <a href="#bulb-use-case">Use Case</a>
  ::
  <a href="#file_cabinet-api">APIs used in the Project</a>
  ::
  <a href="#golf-future-roadmap">Future Roadmap</a>
  ::
  <a href="#sparkles-contributors">Contributors</a>
  ::
  <a href="#email-support">Support</a>

</p>


## 🤖 Unleash the Power of MyExpenseBot (Version 5.0)

Welcome to the all-new MyExpenseBot – your financial wizard on Telegram! 

### 🎉 Features That Redefine Your Financial Experience:

- **Record with Ease:** Effortlessly add and record your daily spending adventures.
- **Instant Summons:** Get real-time summaries of your expenditures for the day or month.
- **Visual Brilliance:** Dive into a world of visual data with stunning pie charts and bar graphs.
- **On-the-Go Editing:** Edit and modify spending details at your fingertips.
- **Recurring Magic:** Set up recurring expenses, adding a touch of automation to your financial game.
- **Budget Bliss:** Gain insights with budget values for total expenses and individual categories.
- **Multi-Currency Marvel:** Now supports 17 additional currencies with lightning-fast local caching.
- **Time Travel Protection:** No more future-dated inputs for income and expenditure.
- **Speed Boost:** Implemented Local JSON Caching, slashing API calls for lightning-fast currency value retrieval.


## 🌟 What more can be done?
Please refer to the [issue list available](https://github.com/orgs/NCSU-Group70-CSC505-SE-Fall-23/projects/1/views/1) to see what more can be done to make MyExpenseBot better. Please refer to the [MyExpense project present](https://github.com/users/nainisha-b/projects/1) to have a look at the tasks to be done, tasks currently in progress and tasks already done.

## :movie_camera: Checkout our video
https://github.com/NCSU-Group70-CSC505-SE-Fall-23/slash/assets/70905787/fe229f61-2bec-4920-96f4-6b693a468bcf


Also, you can watch the video demo of the Slash project with audio explanation here https://youtu.be/XH2iKbnvyMs.


---


## 🚀 Installation guide

The below instructions can be followed in order to set-up this bot at your end in a span of few minutes! Let's get started:

1. ### Clone this Repository:
```bash
  git clone https://github.com/NCSU-Group70-CSC505-SE-Fall-23/MyExpenseBot.git
```

2. ### Start a terminal session in the directory where the project has been cloned. Run the following command to install the required dependencies:
```
  pip install -r requirements.txt
```

3. ### Configure Currency Path:

- Open `code/add.py`.
- Locate the "actual_curr_value" function.
- Set the file path for "currencies.json" (main directory). Refer the image below

   <img width="512" alt="image" src="https://github.com/NCSU-Group70-CSC505-SE-Fall-23/MyExpenseBot/assets/70905787/43ea13cb-b141-4ca1-a806-8f6d3354fdb6">


4. ### Create Your Telegram Bot:

- Search for "BotFather" in Telegram.
- Use `/newbot` to create a new bot.
- Follow instructions, get a TOKEN.

4. ### Update TOKEN in user.properties:

- Open `user.properties`, update TOKEN.

5. ### Run the Telegram Bot:

```bash
./run.sh
```

6. ### Paste the Telegram API token when prompted.

7. ### A successful run will display "TeleBot: Started polling."

## 🧪 Testing

We use pytest to perform testing on all unit tests together. The command needs to be run from the home directory of the project. The command is:
```
python -m pytest test/
```

## Code Coverage

Code coverage is part of the build. Every time new code is pushed to the repository, the build is run, and along with it, code coverage is computed. This can be viewed by selecting the build, and then choosing the codecov pop-up on hover.

Locally, we use the coverage package in python for code coverage. The commands to check code coverage in python are as follows:

```
coverage run -m pytest test/
coverage report
```

### 🌐 Connect with the Authors

- **Title:** 'Track My Income and Expense'
- **Version:** '5.1'
- **Description:** 'An easy-to-use Telegram Bot to track everyday income and expenses'

- #### Authors (Iteration 5): Nisarg, Chaitanya, Mitesh, Aniruddha

- #### Authors (Iteration 4): Anvitha, Nainisha, Vaishnavi

- #### Authors (Iteration 3): Vraj, Alex, Leo, Prithvish,  Seeya

- #### Authors (Iteration 2): Athithya, Subramanian, Ashok, Zunaid, Rithik

- #### Authors (Iteration 1): Dev, Prakruthi, Radhika, Rohan, Sunidhi