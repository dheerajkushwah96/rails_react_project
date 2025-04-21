class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  # GET /api/v1/users or /api/v1/users.json
  def index
    @users = User.all
    render json: @users, each_serializer: UserSerializer
  end

  # GET /api/v1/users/1 or /api/v1/users/1.json
  def show
    @user = User.find(params[:id])
    render json: @user, serializer: UserSerializer
  end

  # GET /api/v1/authenticate_user
  def authenticate_user
    if user_signed_in?
      render json: UserSerializer.call(current_user), status: :ok
    else
      render json: {}, status: :unauthorized
    end
  end
end
