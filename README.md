# Financial Dashboard

A modern financial dashboard built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive view of financial data including cards, transactions, and various analytics charts.

## Features

- 📊 Interactive dashboard with multiple data visualizations
- 💳 Card management and overview
- 💰 Transaction history and tracking
- 📈 Balance history charts
- 📊 Weekly activity analytics
- 💹 Expense statistics
- ⚡ Quick transfer functionality
- 🎨 Modern, responsive UI with Tailwind CSS
- 🔄 Real-time data loading states
- ⚛️ Built with React and TypeScript for type safety

## Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router v6
- **Build Tool:** Vite
- **Code Quality:** ESLint, TypeScript
- **Package Manager:** npm/yarn

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Modern web browser

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd fin-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── Loader/
│   └── dashboard/
│       ├── MyCards/
│       ├── RecentTransactions/
│       ├── WeeklyActivityChart/
│       ├── ExpenseStatisticsChart/
│       ├── QuickTransfer/
│       └── BalanceHistoryChart/
├── pages/
│   ├── DashboardPage.tsx
│   └── SettingsPage.tsx
├── redux/
│   ├── features/
│   │   ├── cardsSlice.ts
│   │   ├── transactionsSlice.ts
│   │   └── dashboardDataSlice.ts
│   ├── hooks.ts
│   └── store.ts
├── layout/
│   └── MainLayout.tsx
└── App.tsx
```

## Development Assumptions

1. **Data Structure:**

   - Cards data includes card number, type, balance, and status
   - Transactions include date, amount, type, and status
   - Dashboard data includes weekly activity, expense statistics, and balance history

2. **UI/UX:**

   - Responsive design for desktop and tablet views
   - Loading states for all data fetching operations
   - Error handling for failed API calls
   - Consistent spacing and grid layouts

3. **Performance:**

   - Lazy loading for route-based components
   - Optimized re-renders using Redux selectors
   - Efficient data fetching with proper loading states

4. **State Management:**
   - Centralized state management using Redux
   - Separate slices for different data domains
   - Type-safe actions and reducers

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run test` - Run vitest
- `npm run type-check` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
