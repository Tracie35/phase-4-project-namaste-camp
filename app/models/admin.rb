class Admin < ApplicationRecord
    has_many activities, through: :users
    has_many services, through: :users
end
