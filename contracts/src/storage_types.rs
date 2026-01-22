use soroban_sdk::{contracttype, contracterror, Address,Symbol};

/// Global error enum for the savings contract
#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq, PartialOrd, Ord)]
#[repr(u32)]
pub enum SavingsError {
    /// User already exists in the system
    DuplicateUser = 1,
    /// User not found in storage
    UserNotFound = 2,
    /// Unauthorized action
    Unauthorized = 3,
}

/// Storage keys for contract data


/// User account data structure
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct User {
    /// Total balance across all savings
    pub total_balance: i128,
    /// Number of active savings accounts
    pub savings_count: u32,
}

impl User {
    /// Create a new user with zero balances
    pub fn new() -> Self {
        User {
            total_balance: 0,
            savings_count: 0,
        }
    }
}

// impl Default for User {
//     fn default() -> Self {
//         Self::new()
//     }

/// Represents the different types of savings plans available in Nestera
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum PlanType {
    Flexi,
    Lock(u64),
    Goal(Symbol, i128, u32),
    Group(u64, bool, u32, i128),
}

/// Represents an individual savings plan for a user
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct SavingsPlan {
    pub plan_id: u64,
    pub plan_type: PlanType,
    pub balance: i128,
    pub start_time: u64,
    pub last_deposit: u64,
    pub last_withdraw: u64,
    /// Annual Percentage Yield (APY) as an integer (e.g., 500 = 5.00%)
    pub interest_rate: u32,
    pub is_completed: bool,
}



/// Storage keys for the contract's persistent data
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum DataKey {
    Admin,
    User(Address),
    /// Maps a (user address, plan_id) tuple to a SavingsPlan
    SavingsPlan(Address, u64),
}

