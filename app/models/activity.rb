class Activity < ApplicationRecord
    belongs_to :User
    has_many :users, through: :admin
    
end
