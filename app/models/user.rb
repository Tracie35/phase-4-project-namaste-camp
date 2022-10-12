class User < ApplicationRecord
    has_many :service
    has_many :activity

    #validation
    validates :name, presence: true
    validates :email, uniqueness: true
    validates :password_digest, length: { in: 6..20 }
    validates :age, :inclusion => 18..35

    # takes a plaintext password and stores a hashed version as a password_digest
  def password=(new_password)
    self.password_digest = dumb_hash(new_password)
  end

  # checks if the hashed plaintext password matches the password_digest
  def authenticate(password)
    return nil unless dumb_hash(password) == password_digest
    self
  end

  private

  # the hashing method
  def dumb_hash(input)
    input.bytes.reduce(:+)
  end
end
