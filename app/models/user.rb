class User < ApplicationRecord
    #password
    has_secure_password

    #validation
    # validates :password_digest, length: { in: 6..20 }
    # validates :age, :inclusion => 18..35
end
