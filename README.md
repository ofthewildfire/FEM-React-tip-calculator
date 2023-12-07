# Tip Calculator App

![Tip Calculator Screenshot](./public/Screenshot%202023-12-07%20at%2014-00-26%20Vite%20React.png)

A simple React app to calculate tips and split the bill among friends. This is a
Frontendmentor.io challenge. 💰

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the Tip Calculator! This React app is designed to make splitting
bills and calculating tips a breeze. It's a straightforward tool that leverages
React's useState and useEffect hooks.

## Features

- **Calculate Tips:** Input your bill amount, select a tip percentage from
  preset buttons, or input a custom tip. See the calculated tip.
- **Split the Bill:** Adjust the number of people sharing the bill to get the
  individual tip per person.

## Technologies Used

- React
- HTML/CSS

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/tip-calculator-react.git
cd tip-calculator-react
```

2. Install dependencies:

```bash
npm install
```

3. Run app:

```bash
npm run dev
```

## Usage

1. Input your bill amount. Note: Decimal numbers are not currently supported
   (see [Issues](#issues)).
2. Select a tip percentage from the preset buttons or input a custom tip.
3. Specify the number of people sharing the bill.
4. Voila! Your calculated tip per person is displayed.

## Issues

### Decimal Number Input Issue

Currently, the app doesn't support decimal numbers in the bill input.

### useEffect Issue

If you are facing issues with the `useEffect` not updating the tip per person
state this known by me and I am trying to fix it.
