class Api::V1::ListSearchController < ApplicationController
    def index
        list = Food.find_by(title: params[:name])
        render json: { status: 'SUCCESS', message: 'Loaded list', title: "이번 달 추천", data: list }
    end
end
